"use strict";
var KTAppSummary = function () {
    const e = () => {
        },
        t = () => {
        };
    return {
        init: function () {
            var o, a;
            ["#kt_description"].forEach((e) => {
                let t = document.querySelector(e);
                t &&
                    (t = new Quill(e, {
                        modules: {
                            toolbar: [
                                [{ header: [1, 2, !1] }],
                                ["bold", "italic", "underline"],
                                ["image", "code-block"],
                            ],
                        },
                        placeholder: "Type your text here...",
                        theme: "snow",
                    }));
                    t.on('text-change', function(delta, oldDelta, source) {
                        console.log(t.container.firstChild.innerHTML)
                        $('#kt_description_detail').val(t.container.firstChild.innerHTML);
                    });
            }),
            ["#kt_meta_description"].forEach((e => {
                let t = document.querySelector(e);
                t && (t = new Quill(e, {
                    modules: {
                        toolbar: [
                            [{
                                header: [1, 2, !1]
                            }],
                            ["bold", "italic", "underline"],
                            ["image", "code-block"]
                        ]
                    },
                    placeholder: "Type your text here...",
                    theme: "snow"
                }))
            }));
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTAppSummary.init()
}));