import React, { useState, useRef } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const CodeExample = ({ code, title, buttonText, className = "" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableCode, setEditableCode] = useState(code);
    const iframeRef = useRef(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const updateIframeContent = () => {
        if (iframeRef.current) {
            const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; color:#04aa6d}
            </style>
          </head>
          <body>
            ${editableCode}
          </body>
        </html>
      `);
            iframeDocument.close();
        }
    };

    return (
        <div
            className={`card mt-4 px-3 py-3 ${className}`}
            style={{
                backgroundColor: "var(--background-color-example)",
                color: "var(--text-color)",
            }}
        >
            {title && <h5 className="mb-3">{title}</h5>}
            <div
                className="pt-3 px-4 rounded"
                style={{ backgroundColor: "var(--background-color-code)" }}
            >
                <pre>
                    <code>{code}</code>
                </pre>
            </div>
            {buttonText && (
                <button
                    className="btn btn-success shadow mt-2"
                    style={{ width: "167px" }}
                    onClick={handleOpenModal}
                >
                    {buttonText}
                </button>
            )}

            {isModalOpen && (
                <div
                    className="modal d-block"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1050,
                    }}
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ backgroundColor: "var(--model-background)" }}>
                            <div className="modal-header d-flex justify-content-between align-items-center">
                                <h5 className="modal-title" style={{ color: "var(--text-color)", }}>Try It Yourself</h5>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary mx-3"
                                        onClick={updateIframeContent}
                                    >
                                        Run
                                    </button>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseModal}
                                    ></button>
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-column flex-lg-row gap-4">
                                <div className="editor-container w-100">
                                    <Editor
                                        value={editableCode}
                                        onValueChange={setEditableCode}
                                        highlight={(code) =>
                                            highlight(code, languages.html, "html")
                                        }
                                        padding={10}
                                        style={{
                                            fontFamily: '"Fira Code", monospace',
                                            fontSize: 14,
                                            backgroundColor: "var(--codeeditor-background)",
                                            borderRadius: "5px",
                                            height: "300px",
                                            overflowY: "auto",
                                        }}
                                    />
                                </div>

                                <div
                                    className="preview-container w-100 border rounded"
                                    style={{ backgroundColor: "var(--codeeditor-background)", height: "300px", }}
                                >
                                    <iframe
                                        ref={iframeRef}
                                        title="Live Preview"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: '0px 20px',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeExample;
