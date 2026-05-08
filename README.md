# 🔬 Learning Lab

> **Owner:** Taylor Huston
> **Focus:** Continuous learning, architectural experiments, and technology evaluations.

## 📖 About This Repository
This repository serves as a centralized "monorepo" for my ongoing technical research. It contains prototypes, proofs of concept (PoCs), and study notes. Tutorials I have followed along with, exercises from books, one-off experiments. Most subprojects are intentionally minimal and disposable. This is not a portfolio repository, but a workspace for hands-on learning and technical evaluation. Embracing "learning in public." Currently pulling in and consolidating older projects from my GitHub, basically putting them all under one roof instead of cluttering up my GitHub with 20 disparate "Hello World" apps.

> **Note:** Projects herein range from "Hello World" syntax checks to complex architectural prototypes. Please check the individual README in each subdirectory for context and scope. Projects may be "graduated" to standalone things if they're interesting enough.

## 🌟 Featured Experiments
*If you are short on time, these are the most substantive projects in this lab:*

_TBD_

| Project | Stack | Research Goal |
| :--- | :--- | :--- |


## 📂 Directory Structure

```
learning-lab/
├── algorithms/                 # Classic algorithms & data structures (2014-2015, consolidated from multiple disparate repos)
│   ├── sorting/                # QuickSort, MergeSort, HeapSort (Java, JS)
│   ├── linked-lists/           # Linked list implementations (Java, JS)
│   ├── stacks-queues/          # Stack, Queue, PriorityQueue (Java)
│   ├── graphs/                 # BFS, DFS, Topological, SCC (Java)
│   ├── trees/                  # BST, Symbol tables (Java)
│   ├── shortest-path/          # Dijkstra, Kruskal, Prim MST (Java)
│   └── interview-prep/         # Cracking the Coding Interview solutions
│
├── books/                      # Book exercises and follow-alongs
│   ├── head-first-python/      # Head First Python exercises
│   └── learn-enough-python/    # Learn Enough Python To Be Dangerous (2024-01-21)
│
├── courses/                    # Structured course materials
│   ├── devops-directive/
│   │   ├── docker-course/      # Complete Docker Course (2024-01-24)
│   │   └── terraform-course/   # Complete Terraform Course (2024-01-18)
│   └── linkedin-learning/
│       └── learning-terraform/ # LinkedIn Learning Terraform (2023-10-14)
│
├── experiments/                # One-off experiments and PoCs
│   └── ollama-agent-manager/   # Multi-agent LLM chat experiment (2026-01-11)
│
├── standalone/                 # Miscellaneous standalone projects
│   ├── programming-cliffnotes/ # Quick reference notes for various languages
│   └── terraform-test/         # Terraform test files - AWS & GCP (2024-02-09)
│
├── tutorials/                  # Official tutorial follow-alongs
│   ├── convex-tutorial/        # Convex getting started
│   ├── flask-tutorial/         # Official Flask tutorial (Flaskr) (2024-01-25)
│   └── nextjs-dashboard/       # Next.js App Router tutorial
│
└── youtube/                    # YouTube tutorial projects
    ├── free-code-camp/
    │   └── jovian-careers/     # Flask careers app tutorial (2024-03-05)
    └── tech-with-tim/
        ├── js-slot-machine/    # JavaScript slot machine (2023-03-28)
        └── python-slot-machine/# Python slot machine (2023-03-20)
```

*Dates in parentheses indicate last update of original repo before consolidation where applicable*

---

## Naming conventions:
_Since this repo will contain many different languages, the naming convention is currently very inconsistent, but this is what I am going to trend towards over time._

Use lowercase kebab-case for all top-level directories, workspace names, package names, documentation files, scripts, and general-purpose files.

Inside language-specific projects, follow the idiomatic convention of that language or framework, preferring lowercase kebab-case if there are no strong conventions otherwise.

Do not create paths that differ only by case.

## ⚖️ License & Disclaimer
Unless otherwise noted, code in this repository is available under the MIT License.
*Note: Some sub-directories may be based on tutorials or external courseware. In those cases, the original author is credited in the respective README.*