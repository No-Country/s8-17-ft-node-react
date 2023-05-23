export default function index() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  return <div></div>;
}
