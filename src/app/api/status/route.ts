import { NextRequest,NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        product:[
        {id:1,name:"John"},
        {id:2,name:"Jane"},
        {id:3,name:"Bob"},


    ]})
}


export async function POST(){
   
    return NextResponse.json({
        product:[
        {id:4,name:"Javed"},
        {id:5,name:"Ali"},
        {id:6,name:"Ibahim"},
        

    ]})
}