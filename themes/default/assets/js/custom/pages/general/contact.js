"use strict";
var KTContactApply = function () {
    var t, e, o, n;
    return {
        init: function () {
            o = document.querySelector("#kt_contact_form"), t = document.getElementById("kt_contact_submit_button"), $(o.querySelector('[name="position"]')).on("change", (function () {
                    e.revalidateField("position")
                })), e = FormValidation.formValidation(o, {
                    fields: {
                        name: {
                            validators: {
                                notEmpty: {
                                    message: "Name is required"
                                }
                            }
                        },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: "Email address is required"
                                },
                                emailAddress: {
                                    message: "The value is not a valid email address"
                                }
                            }
                        },
                        message: {
                            validators: {
                                notEmpty: {
                                    message: "Message is required"
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger,
                        bootstrap: new FormValidation.plugins.Bootstrap5({
                            rowSelector: ".fv-row",
                            eleInvalidClass: "",
                            eleValidClass: ""
                        })
                    }
                }), t.addEventListener("click", (function (o) {
                    o.preventDefault(), e && e.validate().then((function (e) {
                        console.log("validated!"), "Valid" == e ? (t.setAttribute("data-kt-indicator", "on"), t.disabled = !0, setTimeout((function () {
                            t.removeAttribute("data-kt-indicator"), t.disabled = !1, Swal.fire({
                                text: "Form has been successfully submitted!",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then((function (t) {
                                t.isConfirmed
                            }))
                        }), 2e3)) : Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        }).then((function (t) {
                            KTUtil.scrollTop()
                        }))
                    }))
                })),
                function (t) {
                    if (L) {
                        var e, o = L.map(t, {
                            center: [40.725, -73.985],
                            zoom: 30
                        });
                        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                            attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(o), e = void 0 === L.esri.Geocoding ? L.esri.geocodeService() : L.esri.Geocoding.geocodeService();
                        var i = L.layerGroup().addTo(o),
                            a = L.divIcon({
                                html: '<i class="ki-solid ki-geolocation text-primary fs-3x"></span>',
                                bgPos: [10, 10],
                                iconAnchor: [20, 37],
                                popupAnchor: [0, -37],
                                className: "leaflet-marker"
                            });
                        L.marker([40.724716, -73.984789], {
                            icon: a
                        }).addTo(i).bindPopup("430 E 6th St, New York, 10009.", {
                            closeButton: !1
                        }).openPopup(), o.on("click", (function (t) {
                            e.reverse().latlng(t.latlng).run((function (t, e) {
                                t || (i.clearLayers(), n = e.address.Match_addr, L.marker(e.latlng, {
                                    icon: a
                                }).addTo(i).bindPopup(e.address.Match_addr, {
                                    closeButton: !1
                                }).openPopup(), Swal.fire({
                                    html: 'Your selected - <b>"' + n + " - " + e.latlng + '"</b>.',
                                    icon: "success",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then((function (t) {})))
                            }))
                        }))
                    }
                }("kt_contact_map")
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTContactApply.init()
}));
