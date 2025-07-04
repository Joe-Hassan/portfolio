export default function Resume() {
  return (
    <>
      <style jsx>{`
        #pdf-container {
          height: 100dvh;
          width: 100%;
        }

        iframe {
          border: none;
          width: 100%;
          height: 100%;
        }

        .fallback-message {
          display: none;
          font-size: 1.5em;
          text-align: center;
          padding: 20px;
        }
      `}</style>
      
      <main id="pdf-container">
        <iframe
          src={`https://drive.google.com/file/d/1sRzN0JL-M5VEdjMiSTqJTtRo2QPbX8D-/preview`}
          onLoad={(e) => e.currentTarget.style.display = 'block'}
        ></iframe>
        <div id="fallback-message" className="fallback-message">
          <p>
            It seems your browser does not support displaying PDFs. You can
            download the PDF
            <a href="https://drive.google.com/file/d/1sRzN0JL-M5VEdjMiSTqJTtRo2QPbX8D-/view?usp=sharing">
              here
            </a>.
          </p>
        </div>
      </main>
    </>
  );
}