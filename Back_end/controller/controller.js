import { COUNT_ALL, COUNT_ONE } from './../model/counter.js';






// ini cuma untuk testing
export function Root(req, res) {
    res.json({ message: "ini berhasil" })
}



// READ
export function ReadCount(req, res) {
    // console.log(req.body.type);
    if (req.body.type === "ONE GAME") {
        COUNT_ONE.findOne({ game: req.body.game })
            .then((db) => {
                res.json(db);
            })
    };
    if (req.body.type === "ALL GAME") {
        COUNT_ALL.findOne({ game: req.body.game })
            .then((db) => {
                res.json(db);
            })
    };
}



// CREATE ONE
export function SendCounter(req, res) {
    if (req.body.download === 1) {
        if (req.body.type === "ONE GAME") {
            COUNT_ONE.create(req.body)

        } else {
            COUNT_ALL.create(req.body)

        };
    };

    if (req.body.download > 1) {
        if (req.body.type === "ONE GAME") {
            COUNT_ONE.findOneAndUpdate({ game: req.body.game }, { download: req.body.download })
                .then(() => {
                    res.send("OK GES BERHASIL TERIKIM");
                })
                .catch(() => {
                    res.send("FAILED")
                })
        };
        if (req.body.type === "ALL GAME") {
            COUNT_ALL.findOneAndUpdate({ game: req.body.game }, { download: req.body.download })
                .then(() => {
                    res.send("OK GES BERHASIL TERIKIM");
                })
                .catch(() => {
                    res.send("FAILED")
                })
        };
    }
};



// CREATE (MENGIRIMKAN REQUEST DARI FORM)
export function SendRequest(req, res) {
    REQ_KOLEKSI.create(req.body)
        .then(() => {
            res.send("OK GES BERHASIL TERIKIM")
        })
        .catch(() => {
            res.send("FAILED")
        })
};



// CREATE (MENGIRIMKAN PESAN DARI CHAT GLOBAL)
export function ChatGlobal(req, res) {
    CHAT_KOLEKSI.create(req.body)
        .then(() => {
            res.send("OK GES BERHASIL TERIKIM")
        })
        .catch(() => {
            res.send("FAILED")
        })
};