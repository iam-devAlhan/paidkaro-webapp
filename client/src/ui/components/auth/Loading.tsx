export default function Loading() {
  return (
    <>
      <div className="container-fluid">
        <h4>Loading...</h4>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
