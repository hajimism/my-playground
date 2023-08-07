"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialSkill = [
  { id: "a", label: "", point: 0 },
  { id: "b", label: "", point: 0 },
  { id: "c", label: "", point: 0 },
  { id: "d", label: "", point: 0 },
  { id: "e", label: "", point: 0 },
];

const skillAtom = atom(initialSkill);

export const SkillInput = () => {
  const [skills, setSkill] = useAtom(skillAtom);

  return (
    <div className="space-y-4">
      <Label className="text-lg font-bold">スキル</Label>
      <p className="text-sm text-slate-500">
        Point: 最大値は5だけれど、5を超えた数字を設定することもできるよ! /
        他人との比較じゃなくて、自分の中での相対評価を記述してね!
      </p>
      <p className="text-sm text-slate-500">
        ラベルを重複なしですべて埋めるとPreviewが表示できるよ!
      </p>
      <ul className="space-y-2">
        <li className="grid grid-cols-2">
          <Label className="font-bold">ラベル</Label>
          <Label className="font-bold">ポイント</Label>
        </li>
        {skills.map((skill) => {
          const onChangeLabel: ChangeEventHandler<HTMLInputElement> = (e) => {
            setSkill(
              skills.map((s) => {
                if (s.id === skill.id) {
                  return { ...s, label: e.target.value };
                } else {
                  return s;
                }
              })
            );
          };

          const onChangePoint: ChangeEventHandler<HTMLInputElement> = (e) => {
            setSkill(
              skills.map((s) => {
                if (s.id === skill.id) {
                  return { ...s, point: Number(e.target.value) };
                } else {
                  return s;
                }
              })
            );
          };

          const label = skills.find((s) => s.id === skill.id)?.label;
          const point = skills.find((s) => s.id === skill.id)?.point;

          return (
            <li key={skill.id} className="flex">
              <Input
                placeholder="スキル名"
                value={label}
                type="text"
                onChange={onChangeLabel}
              />
              <Input
                value={point}
                min={0}
                type="number"
                onChange={onChangePoint}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SkillPreview = () => {
  const skill = useAtomValue(skillAtom);
  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold text-gray-11">スキル</Label>
      <div className="border-[3px] p-4 pt-10">
        <RadarChart width={464} height={400} data={skill}>
          <PolarGrid />
          <PolarAngleAxis fontSize="16px" dataKey="label" />
          <PolarRadiusAxis
            domain={[0, 5]}
            tick={false}
            tickCount={6}
            axisLine={false}
            allowDataOverflow
            allowDuplicatedCategory
          />
          <Radar
            dataKey="point"
            stroke="#FFCD29"
            fill="#FFEA2C"
            dot
            fillOpacity={0.35}
          />
        </RadarChart>
      </div>
    </div>
  );
};
