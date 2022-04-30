const dal = require("../dal/dal");

async function getAllGroups() {
    const sql = `select groupID, groupName from developmentgroup`;
    const groups = await dal.execute(sql);
    return groups;
}

async function getOneGroup(id) {
    const sql = `select groupID, groupName from developmentgroup
                 where groupID = ` + id;
    const group = await dal.execute(sql);
    return group[0];
}

module.exports = {
    getAllGroups,
    getOneGroup
}