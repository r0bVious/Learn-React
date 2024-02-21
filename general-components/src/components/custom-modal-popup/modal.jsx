export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Placeholder Modal Header"}</h2>
        </div>
        <div className="modal-body">
          {body ? body : <p>Placeholder Modal Body</p>}
        </div>
        <div className="modal-footer">
          {footer ? footer : <p>Placeholder Modal Footer</p>}
        </div>
      </div>
    </div>
  );
}
