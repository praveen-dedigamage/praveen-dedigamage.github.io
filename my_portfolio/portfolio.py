import streamlit as st

st.set_page_config(page_title="My Portfolio", layout="wide")

# Sidebar
with st.sidebar:
    st.image("images/profile.png", width=150)
    st.title("Praveen Chamal")
    st.markdown("Neuroscience | SNNs | BCI")

# Main content
st.title("Welcome to My Portfolio")
st.write("""
Hello! I'm a biomedical engineer and researcher passionate about neuromorphic computing and brain–computer interfaces.

### 🔧 Projects
- **SNN-based EEG Classifier**
- **FPGA Tactile Sensing Interface**
- **Astrocyte Calcium Modeling**

### 📫 Contact
- Email: praveen@email.com
- GitHub: [@yourgithub](https://github.com/yourgithub)
""")
