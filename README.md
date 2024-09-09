# Buckshot-MP

[![Jest Logic Test](https://github.com/JustALostSoul/Buckshot-MP/actions/workflows/jest.js.yml/badge.svg)](https://github.com/JustALostSoul/Buckshot-MP/actions/workflows/jest.js.yml)

Multiplayer-Web-Game based on Buckshot Roulette

It is planned, that you can play with up to 4 players in an online room. The rules are based on the Tabletop-Simulator Game created based on Buckshot Roulette. Once finished, you should be able to choose a server from a list, connect to the room and quickly start playing against other people.

![UML_Class_Diagram][def]

This is the current plan of classes needed. It will change during developement to represent the current state.

The current plan for server connection is to use a peer-to-peer connection to save server resources. One player functions as a host and does all the calculations, so no other players can easily try to cheat by messing with the logic. 

[def]: https://github.com/JustALostSoul/Buckshot-MP/blob/setup/resources/uml/basicUMLv1.png?raw=true
