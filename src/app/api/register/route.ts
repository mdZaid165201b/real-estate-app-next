import { NextRequest, NextResponse } from 'next/server';
import {HttpStatus} from "http-status-ts";
import bcrypt from 'bcrypt';
import dbConnect from "@/app/lib/dbConnect";
import User from "@/models/User";

export async  function POST(request: NextRequest) {
    try {
        await dbConnect();
        const { email, password, firstName, lastName } = await request.json();
        const fetchedUser = await User.findOne({ email });
        if(!fetchedUser) return NextResponse.json({ success: false, message: 'User already exist!!!' });
        const hashedPassword = bcrypt.hash(password, 10);
        const response = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
        return NextResponse.json({ success: true, message: 'user created successfully!!!', data: response }, { status: HttpStatus.CREATED });
    }
    catch (error: any) {
        NextResponse.json({success: false, message: error.message}, { status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
}