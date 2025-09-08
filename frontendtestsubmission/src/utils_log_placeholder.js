// src/utils_log_placeholder.js
export async function Log(stack, level, packageName, message, meta={}) {
  // TEMPORARY: POST directly to the logs endpoint using ACCESS_TOKEN from .env.local (for dev only).
  const token = process.env.REACT_APP_ACCESS_TOKEN || "";
  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ stack, level, package: packageName, message })
    });
    return await res.json().catch(()=>({}));
  } catch (e) {
    return { error: String(e) };
  }
}
