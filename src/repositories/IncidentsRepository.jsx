import { axiosInstance as api, axiosFormDataInstance as apiFormData } from "@services/api";

class IncidentsRepository {
  async getAllReports() {
    const response = await api.get(`incidents/admin/Xoxocotlán`);
    console.log(response)
    return response.data;
  }

  async getUserIncidents(email) {
    const response = await api.get(`incidents/myIncidents/${email}`);
    return response.data;
  }

  async getIncidentById(id) {
    const response = await api.get(`incidents/${id}`);
    return response.data;
  }

  async getIncidentHistory(id) {
    const response = await api.get(`incidents/history/${id}`);
    return response.data;
  }
}

export default new IncidentsRepository();
