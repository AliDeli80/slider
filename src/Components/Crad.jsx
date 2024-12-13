import React from "react";
import CardImage from "./CardImage";
import CradItem from "./CardItem";
import UnitStates from "./UnitStates";

export default function Card({ hero }) {
    return (
        <div className="clash-card barbarian">
            <CardImage src={hero.img} name={hero.name} />
            <CradItem type={"clash-card__level clash-card__level--barbarian"}>{hero.level}</CradItem>
            <CradItem type={"clash-card__unit-name"}>The {hero.name}</CradItem>
            <CradItem type={"clash-card__unit-description"}>{hero.description}</CradItem>
            <UnitStates units={hero.units} name={hero.name} />

        </div>
    )
}