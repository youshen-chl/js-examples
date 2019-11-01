function autocomplete(inp, arr){
    // 自动补全功能   两个参数：inp输入文本框元素， arr自动补全的完整数据集
    var currentFocus;

    inp.addEventListener('input', function(e){
        var a, b, i, val = this.value;
        
        // 关闭所有已经打开的自动完成值列表
        closeAllLists();
        currentFocus = -1;

        // 创建一个DIV元素用于放置 列表
        a = document.createElement('div');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');
        // 添加刚刚新建的DIV元素，作为文本框的兄弟元素
        this.parentNode.appendChild(a);

        // 遍历数组
        for (i=0; i<arr.length; i++){
            // 检查选项是否与输入字段有相同的文本头
            if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()){
                // 为匹配的选项创建DIV元素
                b = document.createElement('div');
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) +"</strong>";
                b.innerHTML += arr[i].substr(val.length) ;
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                
                // 为每个匹配的选项绑定一个click事件处理函数，用于处理点击
                b.addEventListener('click', function(e){
                    // 当点击 完成列表中的某一项时，设置文本框的值为对应选项的值
                    inp.value = this.getElementsByTagName('input')[0].value;
                    // 关闭列表
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    // 为文本框绑定按键事件，处理用户按下 （键盘的上下左右按键）
    inp.addEventListener('keydown',function(e){
        // 获取匹配列表项元素
        var x = document.getElementById(this.id + 'autocomplete-list');
        if(x) x = x.getElementsByTagName('div');
        
        if(e.keyCode == 40){ //40代表键盘的 下键
            //当 down键被按下时， 把 焦点 加一  代表下移一位
            currentFocus++;
            // addActive 是 给当前焦点项 增加 class 以改变颜色
            addActive(x);
        } else if(e.keyCode == 38){  // up键
            currentFocus--;
            addActive(x);
        } else if(e.keyCode == 13){ // enter键
            // 按下enter键后，先阻止form表单默认的submit行为
            e.preventDefault();
            if(currentFocus > -1){
                // 再调用 匹配项的 点击函数， 把匹配项的值传入 input文本框
                if(x) x[currentFocus].click();
            }
        }
    });


    function addActive(x){
        // addActive 函数是实现 给匹配的元素添加 active 类
        if(!x) return false;

        //先清空所有项的activelei
        removeActive(x);

        if(currentFocus >x.length)  currentFocus=0;
        if(currentFocus < 0) currentFocus = x.length;

        x[currentFocus].classList.add('autocomple-active');
    }

    function removeActive(x){
        if(!x) return false;
        for( var i = 0; i < x.length; i++){
            x[i].classList.remove('autocomplete-active');
        }
    }

    function closeAllLists(elmnt){
        //关闭所有 匹配项列表  除了elmnt
        var x = document.getElementsByClassName('autocomplete-items');
        for(var i = 0; i < x.length; i++){
            if(elmnt != x[i] && elmnt != inp){
                x[i].parentNode.removeChild(x[i]);
            }
        }

    }

    document.addEventListener('click', function(e){
        closeAllLists(e.target);
    });
}

/*数组 - 包含所有国家或地区名*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau China","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan China","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

/*传递参数*/
autocomplete(document.getElementById("myInput"), countries);