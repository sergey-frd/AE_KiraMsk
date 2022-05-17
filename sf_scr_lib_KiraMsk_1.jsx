//===================================================
// function handleNewComp2(compName)
// {
//     //var compName = Prefix;
//     var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1.0, durationSec, 25);
//     return newComp;
// 
// }

//===================================================
function readXmlae_maya22_3_1(pathRrXml) 
{
    //var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\ae_maya22_3.xml");
    //lg.writeln("readXmlae_maya22_3_1 pathRrXml: " + pathRrXml.toString());
    var file = File(pathRrXml);
    file.open("r");
    var xmlString = file.read();
    //lg.writeln("readXmlae_maya22_3_1 xmlString: " + xmlString.toString());
    var myXml = new XML(xmlString);
    file.close();
    return myXml;
}


//===================================================
function  handleXmlmaya_2(myXml)
{

    //lg.writeln(" Stuff: " + myXml.Stuff.toString());
    //lg.writeln(" pathurl: " + myXml.pathurl.toString());
    //lg.writeln(" pathurl.length: " + myXml.pathurl.length.toString());
    //lg.writeln(" pathurl[0]: " + myXml.pathurl[0].toString());

    //var winPath = '';
    var i = 0; 
    while(myXml.pathurl[i] != undefined) {

        //lg.writeln(i.toString() + " pathurl[i]: " + myXml.pathurl[i].toString());
        //winPath = xmlPath2Win(myXml.pathurl[i].toString());

        filePathUrl[i] = xmlPath2Win(myXml.pathurl[i].toString());
        //lg.writeln(" filePathUrl[i]: " + filePathUrl[i].toString());

        i++;

    } //    while(myXml.pathurl[i] != undefined) {


}



//===================================================
function  handleXmlmaya_A2(myXml)
{

    var i = 0; 
    while(myXml.pathurl[i] != undefined) {
        filePathUrl[i]  = xmlPath2Win(myXml.pathurl[i].toString());
        filePathUrlA[i] = filePathUrl[i];
        i++;
    } //    while(myXml.pathurl[i] != undefined) {
}


//===================================================
function  handleXmlmaya_B2(myXml)
{

    var i = 0; 
    while(myXml.pathurl[i] != undefined) {
        filePathUrl[i]  = xmlPath2Win(myXml.pathurl[i].toString());
        filePathUrlB[i] = filePathUrl[i];
        i++;
    } //    while(myXml.pathurl[i] != undefined) {
}



//===================================================


//===================================================


//===================================================

