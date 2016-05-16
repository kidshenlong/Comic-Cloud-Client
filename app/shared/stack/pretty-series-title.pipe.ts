/**
 * Created by pattem92 on 09/05/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'prettySeriesTitle'})
export class PrettySeriesTitle implements PipeTransform {
    /*transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }*/
    transform(title: string, startYear: number): string {
     return ""
    }
}