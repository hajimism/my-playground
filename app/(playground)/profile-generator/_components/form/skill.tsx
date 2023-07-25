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
  { id: "a", label: "グラフィック", point: 3 },
  { id: "b", label: "かわいさ", point: 7 },
  { id: "c", label: "ファシリ", point: 3 },
  { id: "d", label: "UIデザイン", point: 3 },
  { id: "e", label: "SD", point: 3 },
];

const skillAtom = atom(initialSkill);

export const SkillInput = () => {
  const [skills, setSkill] = useAtom(skillAtom);

  return (
    <div>
      <Label>スキル</Label>
      <ul>
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
              <Input value={label} type="text" onChange={onChangeLabel} />
              <Input value={point} type="number" onChange={onChangePoint} />
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
          <PolarAngleAxis fontSize="20px" dataKey="label" />
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
