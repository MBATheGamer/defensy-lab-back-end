import { Column, Entity } from "typeorm";
import { Incident } from "./Incident";

@Entity()
export class Information extends Incident {
    @Column()
    dateOfNotification : Date ;
    @Column()
    tier :Number ;
    @Column()
    dateOfDetection : Date ;
    @Column()
    typeOfSoftware :string ;
}