/**
 * Rombusz terület számítására szolgáló segédprogram.
 * Készítette: Zsitnyák Ádám
 * Osztály/Csoport: SZOFT II/N
 * Dátum: 2026-04-13
 * 
 * Formula: T = (e * f) / 2, ahol e és f a rombusz átlói.
 */

/**
 * Kiszámítja a rombusz területét a két átló alapján.
 * @param e Első átló hossza
 * @param f Második átló hossza
 * @returns Terület
 */
export function calculateRombuszArea(e: number, f: number): number {
  return (e * f) / 2;
}
