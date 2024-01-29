module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'Member',
		{
			cmpn_cd: {
				type: DataTypes.STRING(10),
				allowNull: false,
				primaryKey: true
			},
			mbr_id: {
				type: DataTypes.STRING(50),
				allowNull: false,
				primaryKey: true
			},
			init_pwd_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			mbr_pwd: {
				type: DataTypes.STRING(64),
				allowNull: false
			},
			mbr_nm: {
				type: DataTypes.STRING(50),
				allowNull: false
			},
			mbr_email: {
				type: DataTypes.STRING(100),
				allowNull: false
			},
			mbr_se: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			ogn_nm: {
				type: DataTypes.STRING(50),
				allowNull: true
			},
			positn: {
				type: DataTypes.STRING(50),
				allowNull: true
			},
			job: {
				type: DataTypes.STRING(50),
				allowNull: true
			},
			mbr_tel: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			authz: {
				type: DataTypes.STRING(100),
				allowNull: true
			},
			tems_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			prsn_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			email_chck_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			apv_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			},
			del_yn: {
				type: DataTypes.STRING(1),
				allowNull: true
			}
		},
		{
			tableName: 't_npd2_mbr_info',
			timestamps: false
		}
	)
}
