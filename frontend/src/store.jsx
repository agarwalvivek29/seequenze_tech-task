import { atom } from "recoil";

export const dataAtom = atom({
    key : 'dataAtom',
    default : []
});

export const navBarAtom = atom({
    key : 'navAtom',
    default : true
});

export const addCardAtom = atom({
    key : 'addCardAtom',
    default : false
});

export const contextMenuAtom = atom({
    key : 'contextMenuAtom',
    default : {
        visible : false
    }
})