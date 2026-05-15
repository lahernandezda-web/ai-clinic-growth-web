import { NextResponse } from "next/server";
import { auditRequestErrorMessages } from "@/lib/audit-requests/types";
import { insertAuditRequest } from "@/lib/audit-requests/persistence";
import { validateAuditRequestBody } from "@/lib/audit-requests/validate-input";

const SERVER_ERROR_MESSAGE =
  "No se pudo registrar la solicitud en este momento.";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: auditRequestErrorMessages.invalidJsonBody },
      { status: 400 },
    );
  }

  const validation = validateAuditRequestBody(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const saved = await insertAuditRequest(validation.input);
  if (!saved.ok) {
    return NextResponse.json({ error: SERVER_ERROR_MESSAGE }, { status: 500 });
  }

  return NextResponse.json({ request: saved.data });
}
