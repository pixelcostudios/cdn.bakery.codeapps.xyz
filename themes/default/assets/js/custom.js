if (location.hostname === "localhost" || 
location.hostname === "localhost80" || 
location.hostname === "localhost80.local" || 
location.hostname === "localhost82.local" || 
location.hostname === "127.0.0.1") {
    var urlArray = window.location.pathname.split('/');
    var url_Base = document.location.origin + '/' + urlArray[1] + '/' + urlArray[2] + '/';
    var urlPost = urlArray[3];
    var segment_1 = urlArray[3];
    var segment_2 = urlArray[4];
    var segment_3 = urlArray[5];
}
else if (location.hostname === "devtwo.rakhelindo.cc" || 
location.hostname === "10.163.207.188") {
    var urlArray = window.location.pathname.split('/');
    var url_Base = document.location.origin + '/' + urlArray[1] + '/';
    var urlPost = urlArray[3];
    var segment_1 = urlArray[3];
    var segment_2 = urlArray[4];
    var segment_3 = urlArray[5];
} else {
    var urlArray = window.location.pathname.split('/');
    var url_Base = document.location.origin + '/';
    var urlPost = urlArray[1];
    var segment_1 = urlArray[1];
    var segment_2 = urlArray[2];
    var segment_3 = urlArray[3];
}
function addPeriod(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
function clear_currency(value)
{
    return value.replace(/[Rp.,]/g,"")
}

// $(document).on("click", ".check_images", function() {
// $(this).closest('.gallery').find(':checkbox').prop('checked', this.checked);
// });
function AddImages_id() {
    // alert("dfff");
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[2]);
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[2]);
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddImages_en() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddThumb_id() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddThumb_en() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddPDF_id() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddPDF_en() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddFiles_id() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddFiles_en() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}
function FeaturedImages() {
    // alert("dfff");
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
    toastr.options = [];
    toastr.warning('Please select one check box!', '', []);
    return false
    } else {
    
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            n++;
            e = r[i].value;
            t = e.split(",");
            //alert(t[2]);
            console.log("featured:"+t[0]);
            //   console.log("type : "+segment_3);
            //   console.log("type : "+segment_2);
            // if(post_id=="")
            // {
            //   var post_id = "";
            // }
            // else
            // {
            //   var post_id = post_id;
            // }
            // console.log(url_Base + "post/featured/"+post_id+"/" + t[0]);
            $.ajax({
                url: url_Base + "post/featured/"+post_id+"/" + t[0]+"?type="+cat_type,
                data: {
                    name: name
                },
                success: function(data) {
                load_featured();
                toastr.options = [];
                toastr.success('Successfully set featured images', '', []);
                }
            })
            
        }
    }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}
function Deleted_Images() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            // CKEDITOR.instances.content_id.insertHtml(t[2])
            // var id = $(this).data("id");
            // var type = $(this).data('type');
            // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_images();
                    // load_icon();
                    // load_thumb();
                    load_background();
                    toastr.success('Images has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                        url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                        data: { name: name },
                        success: function(data) {
                            load_images();
                            // load_icon();
                            // load_thumb();
                            load_background();
                            toastr.success('Images has been deleted!', '', []);
                        }
                    })
                    // CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function Deleted_Files() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_files();
                    toastr.success('Files has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: { name: name },
                    success: function(data) {
                        load_files();
                        toastr.success('Files has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function Deleted_PDF() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_pdf();
                    toastr.success('PDF has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: { name: name },
                    success: function(data) {
                        load_pdf();
                        toastr.success('PDF has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

// function AddImages() {
// // alert("dfff");
// var e, t;
// var n = 0;
// var r = $('.images-check');
// // alert(r.length);
// if (r.length == null) {
//     if (r.checked) {
//         n++;
//         e = r.value;
//         t = e.split(",");
//         // alert(t[2]);

//         // if (typeof ClassicEditor !== "undefined") {
//         //   ClassicEditor.create(
//         //   document.querySelector("#ckEditorClassic")
//         //   ).then( editor => {
//         //     editor.insertHtml(t[2]);
//         // } ).catch(
//         //     function (error) { }
//         //   );
//         // // }
//         toastr.options = [];
//         toastr.success('Successfully set Images', '', []);

//         // console.log(t[2]);
//         // editor.execute( 'htmlEmbed', '<b>Initial content</b>.' );

//         // CKEDITOR.instances.content_id.insertHtml(t[2]);
//         //ClassicEditor.model.insertContent(text, ckEditor.model.document.selection);
//     }
// } else {
//     for (var i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             n++;
//             e = r[i].value;
//             t = e.split(",");
//             // alert(t[2]);
//             // if (typeof ClassicEditor !== "undefined") {
//             //   ClassicEditor.create(
//             //   document.querySelector("#ckEditorClassic")
//             //   ).then( editor => {
//             //     editor.insertHtml(t[2]);
//             // } ).catch(
//             //     function (error) { }
//             //   );
//             // }
//             //console.log(t[2]);
//             // editor.setData(t[2]);
//             // editor.execute('input','sample text');
//             //editor.execute( 'htmlEmbed', '<b>Initial content</b>.' );

//             toastr.options = [];
//             toastr.success('Successfully set Images', '', []);

//             // CKEDITOR.instances.editor.insertHtml(t[2])
//         }
//     }
// }
//     if (n == 0) {
//     toastr.options = [];
//     toastr.warning('Please select at least one check box!', '', []);
//     return false
//     }
// }