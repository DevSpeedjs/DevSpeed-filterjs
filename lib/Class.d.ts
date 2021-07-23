declare class Filter {
    private BanWord;
    constructor(BanWord: string);
    getBanWord(callback: (result: any) => any): any;
    isBanWord(callback: (results: any) => any): any;
    hasBanWord(callback: (results: any) => any): any;
    censor(): string;
}
export = Filter;
//# sourceMappingURL=Class.d.ts.map