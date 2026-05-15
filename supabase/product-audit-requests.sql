-- PLEXAI — MVP 2: solicitudes de auditoría gratuita (Audit Request Form).
-- Este script define la tabla public.audit_requests y utilidades asociadas
-- (función genérica updated_at, trigger). Ejecutar manualmente en el SQL Editor
-- de Supabase cuando se active la fase de persistencia; no se ejecuta desde CI.

-- ----------------------------------------------------------------------------
-- Función genérica updated_at (idempotente: create or replace)
-- ----------------------------------------------------------------------------
-- Si el proyecto ya define esta función en otro script, este bloque la alinea
-- al mismo contrato: NEW.updated_at := now() antes del update.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

comment on function public.set_updated_at() is 'Trigger genérico: asigna NEW.updated_at a now() en before update.';

-- ----------------------------------------------------------------------------
-- Tabla: public.audit_requests
-- ----------------------------------------------------------------------------
create table if not exists public.audit_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text null,
  business_type text not null,
  city text null,
  website_or_instagram text null,
  main_problem text not null,
  improvement_area text not null,
  status text not null default 'new',
  source text not null default 'plexai_landing',
  consent boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.audit_requests is 'Solicitudes de auditoría gratuita capturadas desde la landing PLEXAI (MVP 2); sin ENUM ni RLS en esta fase.';

comment on column public.audit_requests.id is 'Identificador único de la solicitud.';
comment on column public.audit_requests.name is 'Nombre del contacto o negocio (formulario).';
comment on column public.audit_requests.email is 'Email de contacto comercial.';
comment on column public.audit_requests.phone is 'Teléfono opcional; NULL si no se informa.';
comment on column public.audit_requests.business_type is 'Rubro / tipo de negocio (texto; validación por lista blanca en API).';
comment on column public.audit_requests.city is 'Ciudad opcional.';
comment on column public.audit_requests.website_or_instagram is 'Web o perfil social opcional.';
comment on column public.audit_requests.main_problem is 'Descripción del proceso o fricción a mejorar (lenguaje negocio, sin clínico).';
comment on column public.audit_requests.improvement_area is 'Área principal de interés (texto; validación por lista blanca en API).';
comment on column public.audit_requests.status is 'Estado operativo del lead (p. ej. new, reviewed, contacted); texto libre en MVP.';
comment on column public.audit_requests.source is 'Origen del lead; por defecto tráfico desde la landing PLEXAI.';
comment on column public.audit_requests.consent is 'Consentimiento explícito de contacto comercial (debe ser true en filas válidas vía API).';
comment on column public.audit_requests.metadata is 'JSON plano para extensiones futuras sin migrar esquema; por defecto objeto vacío.';
comment on column public.audit_requests.created_at is 'Marca temporal de alta.';
comment on column public.audit_requests.updated_at is 'Marca temporal de última modificación (actualizada por trigger).';

-- ----------------------------------------------------------------------------
-- Índices
-- ----------------------------------------------------------------------------
create index if not exists idx_audit_requests_created_at
  on public.audit_requests (created_at desc);

create index if not exists idx_audit_requests_status
  on public.audit_requests (status);

create index if not exists idx_audit_requests_business_type
  on public.audit_requests (business_type);

create index if not exists idx_audit_requests_improvement_area
  on public.audit_requests (improvement_area);

-- ----------------------------------------------------------------------------
-- Trigger: mantener updated_at
-- ----------------------------------------------------------------------------
drop trigger if exists audit_requests_set_updated_at on public.audit_requests;
create trigger audit_requests_set_updated_at
  before update on public.audit_requests
  for each row
  execute function public.set_updated_at();
