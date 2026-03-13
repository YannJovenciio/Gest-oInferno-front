export function formatFullDate(iso?: string | null): string {
  if (!iso) return "";
  if (iso.startsWith("0001")) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const year = d.getFullYear();
  const month = d.toLocaleString(undefined, { month: "short" });
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}, ${month} ${day}`;
}

export function formatIsoDateShort(iso?: string | null): string {
  if (!iso) return "";
  if (iso.startsWith("0001")) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
export function isMinDate(s?:string){
    return !s || s.startsWith("0001");
}
export function formatYear(s?:string){
    if(isMinDate(s)) return "";
    return new Date(s!).getFullYear().toString();
}
export function formatMounthDay(s?:string){
    if(isMinDate(s))return "";
    return new Date(s!).toLocaleDateString(undefined,{ month:"short",day:"2-digit"});
}