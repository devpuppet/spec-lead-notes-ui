export interface MeetingNotes {
    personId: string;
    notesId?: string;
    comments: string;
    questions: string;
    managerActionItems: string;
    subordinateActionItems: string;
    importantAgreements: string;
    satisfaction: string;
    plans: string;
    feedback: string;
    issues: string;
    attritionRisk: AttritionRisk;
    oneToOneReportSent: boolean;
}

export enum AttritionRisk {
    NONE = 'None', LOW = 'Low', MEDIUM = 'Medium', HIGH = 'High'
}

export enum YesNo {
    YES = 'Yes', NO = 'No'
}