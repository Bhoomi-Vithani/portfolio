const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const expressMiddleWare = app => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    let approvalMethod;

    // These server mocks are used in the CCS TAN Panel Preview
    app.post("/approval/ui/v1/allcontent", (req, res) => {
        if (Math.random() < 0.9) {
            // SUCCESS
            setTimeout(() => {
                res.status(200).send({
                    result: {
                        data: {
                            contentIncludes: {
                                smstaninfo:
                                    "<lsg-textsection><lsg-h3>SMS TAN Info</lsg-h3><lsg-paragraph>Text</lsg-paragraph></lsg-textsection>",
                                phototaninfo:
                                    "<lsg-textsection><lsg-h3>PHOTO TAN Info</lsg-h3><lsg-paragraph>Text</lsg-paragraph></lsg-textsection>",
                                pushtaninfo:
                                    "<lsg-textsection><lsg-h3>PHOTO TAN PUSH Info</lsg-h3><lsg-paragraph>Text</lsg-paragraph></lsg-textsection>",
                            },
                            text: {
                                "tan.message.12": "Ihr Tanverfahren ist gesperrt",
                                "tan.message.9": "Nur noch ein Klick: Ihr Tanverfahren wird in kürze gesperrt.",
                                "tan.message.0815": "Falsch TAN, Versuchen Sie es nochmal.",
                                "tan.placeholder": "z.B. 1234567",
                                "tan.label": "TAN Eingabe",
                                "titleText.error": "Fehler aufgetreten",
                                "titleText.tan": "Dummy-Freigabe mit ",
                                "subtitleText.tan": "Bitte geben Sie den Auftrag mit Klick auf Freigeben frei",
                                "infoLinkText.tan": "Wie funktioniert Freigeben",
                                "approveButton.approve": "Freigeben",
                                "technicalexception.title": "Technischer Fehler",
                                "technicalexception.subtitle":
                                    "Diese Funktion steht wegen eines technischen Fehlers nicht zur Verfügung",
                                cancelButton: "Freigabe abbrechen",
                                "announcement.loading": "Prüfe TAN",
                                "announcement.switching": "Wechsele zu Photo TAN",
                                "announcement.error": "Ein Fehler ist aufgetreten",
                                "SMS_TAN.title": "Freigabe mit mobileTAN",
                                "SMS_TAN.subtitle1": "Wir haben Ihnen eine SMS an die Nummer",
                                "SMS_TAN.subtitle2": "gesendet. Bitte geben Sie die gesendete TAN ein:",
                                "SMS_TAN.infoLink": "Wie funktioniert mobileTAN?",
                                "SMS_TAN.image.alt": "Handy mit PIN-Eingabe",
                                "SMS_TAN.notification.alt": "Handy mit PIN-Eingabe",
                                "SMS_TAN.notification.subline": "Eingabe am Ende der Seite",
                                "notavailable.title": "TAN-Verfahren ist nicht verfügbar",
                                "tan.message.25": "Ein Fehlerbeschreibungstext Lorem Ipsum",
                                "PHOTO_TAN.title": "Freigabe mit photoTAN-Scan",
                                "PHOTO_TAN.subtitle":
                                    "Bitte geben Sie die im Mobiltelefon / photoTAN-Lesegerät angezeigte photoTAN ein",
                                "PHOTO_TAN.infoLink": "Wie funktioniert photoTAN-Scan?",
                                "PHOTO_TAN.image.alt": "Handy mit QR-Code",
                                "PHOTO_TAN.notification.alt": "Handy mit QR-Code",
                                "PHOTO_TAN.notification.subline": "Eingabe am Ende der Seite",
                                "PUSH_PHOTO_TAN.title": "Freigabe mit photoTAN-Push",
                                "PUSH_PHOTO_TAN.subtitle":
                                    "Jetzt die photoTAN-App starten und den Auftrag dort freigeben.",
                                "PUSH_PHOTO_TAN.infoLink": "Wie funktioniert photoTAN-Push?",
                                "PUSH_PHOTO_TAN.image.alt": "Handy mit QR-Code",
                                "PUSH_PHOTO_TAN.notification.alt": "Handy mit QR-Code",
                                "PUSH_PHOTO_TAN.notification.subline": "Details am Ende der Seite",
                                switchLink: "Wechsel zu photoTAN-Scan",
                                "PUSH_APPROVED.title": "Freigabe erfolgt",
                                "PUSH_APPROVED.subtitle": "Sie werden nun weitergeleitet.",
                                "PUSH_APPROVED.infoLink": "Ich benötige Hilfe",
                                "PUSH_APPROVED.image.alt": "Pfeil auf Bildschirm mit Webseite",
                                "PUSH_APPROVED.notification.alt": "Pfeil auf Bildschirm mit Webseite",
                                "PUSH_APPROVED.notification.subline": "Sie werden nun weitergeleitet",
                                "tan.message.push.expired":
                                    "Ihre Anmeldung mit photoTAN-Push ist nicht mehr gültig. Bitte den Abmelde-Button klicken und dann erneut einloggen oder mit photoTAN-Scan anmelden.",
                                "tanpanel.error.tan.required": "Tan-Feld ist leer",
                                "tanpanel.error.tan.invalid": "Tan ist ungültig",
                                "SIGNATURE.title": "Freigabe mit Unterschrift",
                                "SIGNATURE.subtitle":
                                    "Bitte drucken Sie die Einverständniserklärung und händigen Sie diese dem Kunden aus.",
                                "SIGNATURE.checkboxtext": "Label für die Checkbox",
                                "SIGNATURE.image.alt": "Drucker und unterschriebenes Dokument",
                                "SIGNATURE.notification.alt": "Dokument und Stift, der eine Unterschrift erstellt",
                                "SIGNATURE.notification.subline": "Bestätigung am Ende der Seite",
                                "BUTTON.title": "Freigabe mit Button",
                                "BUTTON.subtitle": "Bitte drücken Sie auf den Button.",
                                "BUTTON.image.alt": "Runde Eingabeschaltfläche mit Haken",
                                "BUTTON.notification.alt": "Runde Eingabeschaltfläche mit Haken",
                                "BUTTON.notification.subline": "Bestätigung am Ende der Seite",
                                "TECHNICAL_ERROR.image.alt": "Handy mit Fehlermeldung",
                                "TECHNICAL_ERROR.notification.alt": "Handy mit Fehlermeldung",
                                "TECHNICAL_ERROR.notification.subline": "Details am Ende der Seite",
                                "CANCELLING_ERROR.image.alt": "Warnschild",
                                "CANCELLING_ERROR.notification.alt": "Handy mit Fehlermeldung",
                                "CANCELLING_ERROR.notification.subline": "Details am Ende der Seite",
                            },
                        },
                        hints: [],
                    },
                    metaData: { globalRequestId: "" },
                });
            }, Math.random() * 5000);
        } else {
            // FAIL
            if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "ccb.technicalexception",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        }
    });

    app.post("/approval/ui/v1/prepare", (req, res) => {
        if (Math.random() < 0.9) {
            // SUCCESS
            approvalMethod = req.body.data.requestedApprovalMethod;
            setTimeout(() => {
                res.status(200).send({
                    result: {
                        data: {
                            approvalMethod,
                            serverChallenge: "...",
                            imageBase64:
                                approvalMethod === "PHOTO_TAN"
                                    ? "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"
                                    : undefined,
                            mobileNumber: approvalMethod === "SMS_TAN" ? "*****0815" : undefined,
                            buttonText: "approveButton.approve",
                        },
                        hints: Math.random() < 0.3 ? [{ messageId: "tan.message.9" }] : null,
                    },
                    error: null,
                    metaData: {
                        processContextId: "...",
                        globalRequestId: "...",
                    },
                });
            }, Math.random() * 5000);
        } else {
            // FAIL
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "ccb.technicalexception",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "tan.message.push.expired",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        }
    });

    app.post("/approval/ui/v1/approve", (req, res) => {
        if (approvalMethod === "PUSH_PHOTO_TAN") {
            if (Math.random() < 0.7) {
                // PUSH PENDING
                setTimeout(() => {
                    res.status(200).send({
                        error: { cancelling: false, errors: [{ messageId: "tan.message.push.still.pending" }] },
                    });
                }, Math.random() * 5000);
            } else if (Math.random() < 0.5) {
                // PUSH OK
                setTimeout(() => {
                    res.status(200).send({
                        result: { data: { approval: "OK" }, hints: [{ messageId: "" }] },
                        metaData: { processContextId: "4711", globalRequestId: "" },
                    });
                }, Math.random() * 5000);
                /* eslint-disable-next-line no-dupe-else-if */
            } else if (Math.random() < 0.5) {
                // EXPIRED
                setTimeout(() => {
                    res.status(200).send({
                        error: { cancelling: false, errors: [{ messageId: "tan.message.push.expired" }] },
                    });
                }, Math.random() * 5000);
                /* eslint-disable-next-line no-dupe-else-if */
            } else if (Math.random() < 0.5) {
                // Technical Exception
                setTimeout(() => {
                    res.status(200).send({
                        error: { cancelling: true, errors: [{ messageId: "ccb.technicalexception" }] },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        } else if (Math.random() < 0.7) {
            if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: {
                            data: { approvalToken: "Ich bin das Token" },
                            hints: [],
                        },
                        metaData: {
                            processContextId: "...",
                            globalRequestId: "...",
                        },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: false,
                            errors: [
                                {
                                    messageId: "tan.message.0815",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            }
        } else {
            // FAIL
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "ccb.technicalexception",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "tan.message.push.expired",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        }
    });

    app.post("/approval/ui/v1/switchmethod", (req, res) => {
        if (Math.random() < 0.7) {
            // SUCCESS
            approvalMethod = "PHOTO_TAN";
            setTimeout(() => {
                res.status(200).send({
                    result: {
                        data: {
                            approvalMethod,
                            serverChallenge: "...",
                            imageBase64:
                                approvalMethod === "PHOTO_TAN"
                                    ? "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"
                                    : undefined,
                        },
                        hints: null,
                    },
                    error: null,
                    metaData: {
                        processContextId: "...",
                        globalRequestId: "...",
                    },
                });
            }, Math.random() * 5000);
        } else {
            // FAIL
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "ccb.technicalexception",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: false,
                            errors: [
                                {
                                    messageId: "tan.message.push.expired",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        }
    });

    app.post("/approval/ui/v1/cancel", (req, res) => {
        // dummy
        if (Math.random() < 0.9) {
            setTimeout(() => {
                res.status(200).send({
                    result: {
                        data: null,
                        hints: null,
                    },
                    error: null,
                    metaData: {
                        processContextId: "...",
                        globalRequestId: "...", // automatically inserted on the JSON's way out
                    },
                });
            }, Math.random() * 5000);
        } else {
            // FAIL
            if (Math.random() < 0.5) {
                setTimeout(() => {
                    res.status(200).send({
                        result: null,
                        error: {
                            cancelling: true,
                            errors: [
                                {
                                    messageId: "ccb.technicalexception",
                                },
                            ],
                        },
                        metaData: { globalRequestId: "" },
                    });
                }, Math.random() * 5000);
            } else {
                setTimeout(() => {
                    res.status(500).send();
                }, Math.random() * 5000);
            }
        }
    });
};

module.exports = expressMiddleWare;
