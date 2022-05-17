var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_KiraMsk\\log\\";
var scr_name = "KiraMsk_22_2ab3";


//#include "sf_scr_global_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_1.jsx"
#include "sf_scr_lib_KiraMsk_1.jsx"


#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\json2.js"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_final_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_folder_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_prop_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_sys_1.jsx"

#include "sf_scr_lib_KiraMsk_1.jsx"


// global vars
var durationSec     = 5;
var rotationEnable  = 1;

// global vars
//var location = "C:\\data";
//var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";


//===================================================
function main() 
{



    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());


    // AAAAAAAAAAAAAAAAAAAAAAAAAAAA
    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_KiraMsk\\xml\\gen_KiraMsk_22_1.xml");
    lg.writeln(" genXml: " + genXml.toString());
    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    lg.writeln(" pathRrXml: " + pathRrXml.toString());
    
    myXml = readXmlae_maya22_3_1(pathRrXml);
    lg.writeln(" myXml: " + myXml.toString());
    
    //handleXmlmaya_2(myXml);
    handleXmlmaya_A2(myXml);

    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    //filePathUrlA = filePathUrl;
    lg.writeln('filePathUrlA.length= ' +  String(filePathUrlA.length)  );
    //i=0
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);    
    
    handleFolders() ;
    handleNewComposit2();
    


    // BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_KiraMsk\\xml\\gen_KiraMsk_22_1b.xml");
    lg.writeln(" genXml: " + genXml.toString());
    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    lg.writeln(" pathRrXml: " + pathRrXml.toString());

    //i=0
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);


    myXml = readXmlae_maya22_3_1(pathRrXml);
    lg.writeln(" myXml: " + myXml.toString());
    
    //i=0
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    //lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);

    handleXmlmaya_B2(myXml);
    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    //filePathUrlB = filePathUrl;
    lg.writeln('filePathUrlB.length= ' +  String(filePathUrlB.length)  );

    i=0
    lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);
    lg.writeln(' i= '+ String(i+1) +'  filePathUrlB=> ' + filePathUrlB[i]);


    handleFoldersB();
    handleFoldersAB();
   
    handleComposAB();    

    var compFinalName = "aeFinalKiraMskAllAB_1";
    finalComp = handleFinalCompAllAB(compFinalName);

    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

