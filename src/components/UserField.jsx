// REVIEW: Quote style mixes double quotes with the rest of the codebase (mostly single); run Prettier/eslint stylistic rule for consistency.
function UserField({ label, value }) {
  return (
    <p>
      <span className="label">{label}</span> {value}
    </p>
  );
}

export default UserField;
