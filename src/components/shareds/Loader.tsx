import "./shareds.scss";

export default function Loader({ bg = "", bgdark = "" }) {
  return (
    <div className={`loader-wrapper ${bg} dark:${bgdark}`}>
      <div className="loader"></div>
    </div>
  );
}
