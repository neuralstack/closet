function drawer_left_change(e){
    var value = e.value;
    if(value==="true"){
        var section_left = stage.find("#section_left")[0];
        var hanger_left = stage.find("#hanger_left")[0];
        if(hanger_left==undefined){
            var drawer = new Konva.Rect({
                id:"drawer_left",
               offsetX:0,
               offsetY:0,
               x:section_left.attrs.x+2,
               y:section_left.attrs.y+2,
               fill:"#dddddd",
               stroke: 'grey',
                strokeWidth: 1,
               width:section_left.attrs.width-4,
               height:30
            })
            layer.add(drawer).draw();
        }
        else{
            var drawer = new Konva.Rect({
                id:"drawer_left",
               offsetX:0,
               offsetY:0,
               x:section_left.attrs.x+2,
               y:hanger_left.attrs.height+6,
               fill:"#dddddd",
               stroke: 'grey',
                strokeWidth: 1,
               width:section_left.attrs.width-4,
               height:30
            })
            layer.add(drawer).draw();
        }
        var drawer = new Image();
drawer.onload = function() {
    var drawer_parent = stage.find("#drawer_left")[0];
    console.log("drawer:",drawer_parent);
    Image_draw(this,600,200,drawer_parent.attrs.width,drawer_parent.attrs.height,"drawer_left_img","#drawer_left");
};
drawer.src = 'images/drawer_front_1.jpg';

var handle = new Image();
handle.onload = function() {
    Image_draw(this,500,200,30,10,"handle_img","#drawer_left_img");
};
handle.src = 'images/handle.png';

       layer.draw();
    }
    else{
        stage.find("#drawer_left")[0].destroy();
        stage.find("#drawer_left_img")[0].destroy();
        stage.find("#handle_img")[0].destroy();


        layer.draw();
    }
}