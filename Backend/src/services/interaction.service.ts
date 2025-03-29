import { Interaction } from "../entities/interaction.entity";
import { interactionRepository } from "../repositories/interaction.repository";

const interactionRepo = new interactionRepository();

export class interactionService {
    async addInteraction(interaction: Partial<Interaction>) {
        try {
            const result = await interactionRepo.addInteraction(interaction);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async updateInteraction(id: number, interaction: Partial<Interaction>) {
        try {
            const result = await interactionRepo.updateInteraction(id, interaction);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async deleteInteraction(id: number) {
        try {
            const result = await interactionRepo.deleteInteraction(id);
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }

    async getInteractions() {
        try {
            const result = await interactionRepo.getInteractions();
            return result;
        } catch (error) {
            return `Error: ${error}`;
        }
    }
}
