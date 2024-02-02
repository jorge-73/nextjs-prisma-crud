import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updateTask = await prisma.task.update({
      where: { id: Number(params.id) },
      data: data,
    });
    return NextResponse.json(updateTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(req, { params }) {
  try {
    const deleteTask = await prisma.task.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(deleteTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
