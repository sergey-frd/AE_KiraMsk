﻿var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_KiraMsk\\log\\";
var scr_name = "KiraMsk_22_1";


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

    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_KiraMsk\\xml\\gen_KiraMsk_22_1.xml");
    lg.writeln(" genXml: " + genXml.toString());
    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    lg.writeln(" pathRrXml: " + pathRrXml.toString());
    //
    //
    // return // !!!
    //
    myXml = readXmlae_maya22_3_1(pathRrXml);
    lg.writeln(" myXml: " + myXml.toString());
    
    handleXmlmaya_2(myXml);
    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    
    
    handleFolders() ;
    handleNewComposit2();
    
    var compFinalName = "aeFinalKiraMskAll_1";
    finalComp = handleFinalCompAll(compFinalName);
    
    var compFinalName = "aeFinalKiraMsk_1";
    finalComp = handleFinalComp4(compFinalName);
    
    var compFinalName = "aeFinalKiraMskBaseBg_1";
    finalComp = handleFinalCompBaseBg(compFinalName);
    
    var compFinalName = "aeFinalKiraMskBg_1";
    finalComp = handleFinalCompBg(compFinalName);
    
    
    var compFinalName = "aeFinalKiraMskBase_1";
    finalComp = handleFinalCompBase(compFinalName);
    
    
    var compFinalName = "aeFinalKiraMskBaseBi_1";
    finalComp = handleFinalCompBi(compFinalName);


    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

