declare let getBanWord: (callback: (result: any) => any) => any;
declare let censor: (banword: string) => string;
declare let hasBanWord: (banword: string) => boolean;
declare let isBanWord: (banWord: string, debug: boolean) => boolean;
declare class Filter {
    private BanWord;
    constructor(BanWord: string);
    getBanWord(callback: (result: any) => any): any;
    isBanWord(callback: (results: any) => any): any;
    hasBanWord(callback: (results: any) => any): any;
    censor(): string;
}
export { censor, hasBanWord, getBanWord, isBanWord, Filter, };
//# sourceMappingURL=filter.d.ts.map