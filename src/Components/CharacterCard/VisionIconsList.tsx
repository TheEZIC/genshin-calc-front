import React from "react";
import {VisionType} from "genshin-calculator/dist/VisionType";
import AnemoIcon from "../Icons/ElementIcons/AnemoIcon";
import CryoIcon from "../Icons/ElementIcons/CryoIcon";
import ElectroIcon from "../Icons/ElementIcons/ElectroIcon";
import GeoIcon from "../Icons/ElementIcons/GeoIcon";
import HydroIcon from "../Icons/ElementIcons/HydroIcon";
import PyroIcon from "../Icons/ElementIcons/PyroIcon";

interface IVisionIconItem {
  visionType: VisionType;
  displayName: string;
  icon: React.ReactNode;
  color: string;
}

export default class VisionIconsList {
  private visionIcons: IVisionIconItem[] = [
    {
      visionType: VisionType.Anemo,
      displayName: "Анемо",
      icon: <AnemoIcon/>,
      color: "#33ccb3"
    },
    {
      visionType: VisionType.Cryo,
      displayName: "Крио",
      icon: <CryoIcon/>,
      color: "#98c8e8"
    },
    {
      visionType: VisionType.Electro,
      displayName: "Электро",
      icon: <ElectroIcon/>,
      color: "#d376f0"
    },
    {
      visionType: VisionType.Geo,
      displayName: "Гео",
      icon: <GeoIcon/>,
      color: "#cfa726"
    },
    {
      visionType: VisionType.Hydro,
      displayName: "Гидро",
      icon: <HydroIcon/>,
      color: "#1c72fd"
    },
    {
      visionType: VisionType.Pyro,
      displayName: "Пиро",
      icon: <PyroIcon/>,
      color: "#e2311d"
    }
  ];

  public find(visionType: VisionType): IVisionIconItem {
    return this.visionIcons.find(v => v.visionType === visionType)!!;
  }
}