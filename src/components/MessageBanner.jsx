// REVIEW: When `loading` is true and `message` is set, the banner shows `message` not "Loading..." — verify that matches desired UX during overlapping states.
function MessageBanner({ message, loading, messageRef }) {
  if (!message && !loading) return null;

  return (
    <div ref={messageRef} className="message">
      {loading && !message ? "Loading..." : message}
    </div>
  );
}

export default MessageBanner;
