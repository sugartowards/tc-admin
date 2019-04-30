/**
 * Created by Suger on 2018/3/27.
 */
import {SysTab, SysFld, SysFldVal} from '../../../../config/sysTables';
import {StatusNew} from '../page/tablesManage';

export const TabTableObj = 'tabTableObj';
export const FldTableObj = 'fldTableObj';
export const FldValTableObj = 'fldValTableObj';
export const TablesEditFunc = {

    success: function () {
        let sysTab = Object.assign({}, this.props.sysTab, {
            status: StatusNew,
        });
        sysTab[SysTab.TAB_NAME] = this.refs[TabTableObj].getData()[0];
        sysTab[SysFld.TAB_NAME] = this.refs[FldTableObj].child.getData();
        sysTab[SysFldVal.TAB_NAME] = this.refs[FldValTableObj].getData();
        this.props.success(sysTab);
    },

    /**
     * 新增行
     */
    addFldVal: function () {
        let dataGrid = this.refs[FldValTableObj];
        let fldValObj = {id: dataGrid.getData().length};
        fldValObj[SysFldVal.FLD_TAB_NAME] = this.refs[TabTableObj].getData()[0][SysTab.FLD_TAB_NAME];
        let fldValData = dataGrid.getData();
        if (fldValData.length) {
            fldValObj[SysFldVal.FLD_COL_NAME] = fldValData[fldValData.length - 1][SysFldVal.FLD_COL_NAME];
            fldValObj[SysFldVal.FLD_DISP_ORDER] = (fldValData[fldValData.length - 1][SysFldVal.FLD_DISP_ORDER] || 0) + 1;
        } else {
            fldValObj[SysFldVal.FLD_DISP_ORDER] = 1;
        }
        dataGrid.addRow(fldValObj);
        setTimeout(()=>window.scrollTo(0, this.containerDiv.clientHeight), 100);
    },

    /**
     * 删除行
     */
    delFldVal: function (rows) {
        this.refs[FldValTableObj].deleteRow(rows);
    },

    /**
     * 0-maxMum之间切换
     * @param target
     */
    changeNum: function ({target}) {
        let field = target.getAttribute('field');
        let index = target.getAttribute('rowIndex');
        let maxMum = target.getAttribute('maxMum');
        let towNums = target.getAttribute('towNums').split(',');
        let curNum = parseInt(target.innerText);
        if (maxMum) {
            curNum += 1;
            curNum = curNum > maxMum ? 0 : curNum;
        } else {
            curNum = towNums[0] == curNum ? towNums[1] : towNums[0];
        }
        let row = {};
        row[field] = `${curNum}`;
        this.refs[FldTableObj].child.updateRow(row, index);
    },

    /**
     * 文本修改更新行
     * @param target
     */
    changeText: function ({target}) {
        let field = target.getAttribute('field');
        let index = target.getAttribute('rowIndex');
        let obj = target.getAttribute('obj') || FldTableObj;
        let row = {};
        row[field] = target.value;
        if (obj == FldTableObj) {
            this.refs[obj].child.updateRow(row, index);
        } else {
            this.refs[obj].updateRow(row, index);
        }
    },

    /**
     * 下拉框修改更新行
     * @param value
     * @param field
     * @param index
     * @param obj
     */
    changeSelect: function (value, {field, index, obj = FldTableObj}) {
        let row = {};
        row[field] = value;
        if (obj == FldTableObj) {
            this.refs[obj].child.updateRow(row, index);
        } else {
            this.refs[obj].updateRow(row, index);
        }
    },

    onLoadSuccess: function (rows) {
        let columns = [];
        rows.map(row => {
            columns.push(row[SysFld.FLD_COL_NAME]);
        });
        this.columns = columns;
    },

    /**
     * 拖动之后触发的函数
     * @param dataSource
     */
    onDrag: function (dataSource) {
        dataSource.map((data, index) => {
            data[SysFld.FLD_DISP_ORDER] = index + 1;
        });
    }

};