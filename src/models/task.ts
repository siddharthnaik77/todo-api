import { DataTypes, Model, Sequelize } from "sequelize";

export class Task extends Model {
  declare id: number;
  declare name: string;
  declare description?: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initializeTask(sequelize: Sequelize) {
  Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Incomplete",
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      timestamps: true,
    }
  );

  return Task;
}
