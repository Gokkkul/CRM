import { AppDataSource } from "../config/data-source";
import { Interaction } from "../entities/interaction.entity";

export class interactionRepository {
    private appDataSource = AppDataSource.getRepository(Interaction);

    async addInteraction(interaction: Partial<Interaction>) {
        const data = this.appDataSource.create(interaction);
        await this.appDataSource.save(data);
        return `Interaction added successfully...!`;
    }

    async updateInteraction(id: number, interaction: Partial<Interaction>) {
        await this.appDataSource.update(id, interaction);
        return `Interaction updated successfully...!`;
    }

    async deleteInteraction(id: number) {
        await this.appDataSource.update(id, { isDeleted: 1 });
        return `Interaction deleted successfully...!`;
    }

    async getInteractions() {
        const result = await this.appDataSource.find();
        return result;
    }
}
