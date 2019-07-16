let history: any = null;

export function setHistory(h: any) {
  history = h;
}

export function helperRedirect(to: string) {
  history && history.push(to);
}

export function helperRedirectReplace(to: string) {
  history && history.replace(to);
}
