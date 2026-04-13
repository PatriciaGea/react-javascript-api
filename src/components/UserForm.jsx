// REVIEW: Inputs use placeholders only — add `<label htmlFor=...>` (visually hidden if needed) for screen readers and autocomplete attributes where appropriate.
// REVIEW: "Clear" is not `disabled={loading}` unlike other actions — users can clear during a request; confirm whether that is intentional.
function UserForm({
  formRef,
  name,
  email,
  age,
  onNameChange,
  onEmailChange,
  onAgeChange,
  editingId,
  loading,
  onSubmit,
  onSearch,
  onShowAll,
  onClear,
  onUpdate,
  onCancelEdit,
}) {
  return (
    <form ref={formRef} onSubmit={(event) => event.preventDefault()}>
      <h1>{editingId ? "Edit User" : "User Registration"}</h1>
      {editingId && (
        <p className="edit-notice">
          Open to edit — change the fields and click Save
        </p>
      )}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => onAgeChange(event.target.value)}
        min="1"
        max="120"
      />
      <div className="button-group">
        {editingId ? (
          <>
            <button
              type="button"
              onClick={onUpdate}
              disabled={loading}
              className="btn-edit"
            >
              Save
            </button>
            <button type="button" onClick={onCancelEdit} className="btn-clear">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={onSubmit} disabled={loading}>
              Add User
            </button>
            <button
              type="button"
              onClick={onSearch}
              disabled={loading}
              className="btn-search"
            >
              Search
            </button>
            <button
              type="button"
              onClick={onShowAll}
              disabled={loading}
              className="btn-show-all"
            >
              Show All
            </button>
            <button type="button" onClick={onClear} className="btn-clear">
              Clear
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default UserForm;
