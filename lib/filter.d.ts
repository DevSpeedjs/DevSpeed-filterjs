declare let getBanWord: (callback: (result: any) => any) => any;
declare let censor: (banword: string) => string;
declare let hasBanWord: (banword: string) => boolean;
declare let isBanWord: (banWord: string, debug: boolean) => boolean;
declare let addBanWord: (banword: string[]) => void;
declare class Filter {
    private BanWord;
    constructor(BanWord: string);
    getBanWord(callback: (result: any) => any): any;
    isBanWord(callback: (results: any) => any): any;
    hasBanWord(callback: (results: any) => any): any;
    censor(): string;
    static addBanWord(banword: string[]): void;
}
export { censor, hasBanWord, getBanWord, isBanWord, addBanWord, Filter, };
//# sourceMappingURL=filter.d.ts.map