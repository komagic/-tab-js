/**
 * author：jackyTan
 */
(function (window, document) {

    var Tab = function (opts) {

        this.option = opts;
        var config = {
                ele: document,
                index: 0,
                current: "current",
                type: "mouseover",
               
                btnItem: "btnItem",
                bdItemParent: "bdItemParent"
            },
            doc = document;

        option = Object.assign({}, config, opts);

        tat = doc.getElementsByClassName(option.ele)[0];
        bdtarget=doc.getElementsByClassName(option.bdItemParent)[0];

        var buttons = Array.from(tat.getElementsByClassName(option.btnItem));

        var contents = Array.from(doc.getElementsByClassName(option.bdItemParent)[0].children);
       
        buttons.forEach(function (item, index) {
            item.index = index;
        });
        contents.forEach(function (item, index) {
            item.index = index;
        });

        tat.addEventListener(option.type, function (e) {

            if (e.target.classList.contains(option.btnItem)) {
                bdtarget.getElementsByClassName(option.current)[0].classList.remove(option.current);
                tat.getElementsByClassName(option.current)[0].classList.remove(option.current);
                contents[e.target.index].classList.add(option.current);
                buttons[e.target.index].classList.add(option.current);
            }

        });


    }
    window.Tab = Tab;






})(window, document);