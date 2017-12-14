import { Component, OnInit, Inject } from '@angular/core';
import { UserLevelService } from '../userlevel.service';

@Component({
    selector: 'app-userlevel',
    templateUrl: './userlevel.component.html',
    styleUrls: ['./userlevel.component.scss']
})
export class UserlevelComponent implements OnInit {
    alluserlevel: any = [];
    userlevels: any[] = [];
    mode = 'Promise';
    UserLevelId: any;
    UserLevelName: any;
    open: boolean = false;
    edit: boolean = false;
    constructor(
        private userlevelService: UserLevelService
    ) { }

    ngOnInit() {
        this.showAllUserlevel();
    }

    showAllUserlevel() {
        this.alluserlevel = [];
        this.userlevelService.getAllUserLevel()
            .then((rows: any) => {
                if (rows.ok) {
                    this.alluserlevel = rows.rows;
                    console.log(this.alluserlevel);
                } else {
                    console.log(JSON.stringify(rows.error));
                }
            })
            .catch(() => {
                console.log("Server Error")
            })
    }
    OpenModal() {
        this.open = true
    }

    ShowModal(user) {
        this.edit = true
        this.UserLevelId = user.ul_id;
        this.UserLevelName = user.ul_name;
    }

    addData() {
        console.log(this.UserLevelId);
        console.log(this.UserLevelName);
        if (this.UserLevelId && this.UserLevelName) {
            this.userlevelService.save(this.UserLevelId, this.UserLevelName)
                .then((results: any) => {
                    if (results.ok) {
                        this.UserLevelId = null;
                        this.UserLevelName = null;
                        this.showAllUserlevel();
                        this.open = false
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ")
                    }
                })
                .catch(() => {
                    console.log("Server Error")
                })
        } else {
            console.log("กรอกข้อมูลไม่ครบ")
        }
    }
    editData() {
        console.log(this.UserLevelId);
        console.log(this.UserLevelName);
        if (this.UserLevelId && this.UserLevelName) {
            this.userlevelService.update(this.UserLevelId, this.UserLevelName)
                .then((results: any) => {
                    if (results.ok) {

                        this.showAllUserlevel();
                        this.edit = false
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ")
                    }
                })
                .catch(() => {
                    console.log("Server Error")
                })
        } else {
            console.log("กรอกข้อมูลไม่ครบ")
        }
    }
    delData(user) {
        this.UserLevelId = user.ul_id;
        console.log(this.UserLevelId);
            this.userlevelService.del(this.UserLevelId)
                .then((results: any) => {
                    if (results.ok) {
                        this.showAllUserlevel();
                        this.edit = false
                        this.open = false
                    } else {
                        console.log("เพิ่มข้อมูลไม่สำเร็จ")
                    }
                })
                .catch(() => {
                    console.log("Server Error")
                })
        }

}
