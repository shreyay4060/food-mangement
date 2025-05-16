const Loader = () => (
  <div style={{ fontSize: "1.3rem", color: "#dd2476", marginTop: "3rem" }}>
    <span className="loader"></span> Loading foods...
    <style>{`
      .loader {
        display: inline-block;
        width: 28px;
        height: 28px;
        border: 3px solid #ffb6d5;
        border-top: 3px solid #dd2476;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 10px;
        vertical-align: middle;
      }
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
    `}</style>
  </div>
);

export default Loader;