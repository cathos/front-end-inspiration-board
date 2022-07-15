import "./App.css";

const BoardForm = ({
  setTitle,
  setOwner,
  title,
  owner,
  handleBoardFormSubmit,
}) => {
  return (
    <div>
      <section className="form">
        ⁺ 𓂋 𓈒 ♡Create Board ⁺ 𓂋 𓈒 ♡
        <form>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr />
          <label>Owner</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <hr />
          <button className="form-button" onClick={handleBoardFormSubmit}>
            Add Board
          </button>
        </form>
      </section>
    </div>
  );
};
export default BoardForm;
